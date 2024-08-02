import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserPlus, FaHeart, FaCommentDots, FaCamera, FaEye } from "react-icons/fa";
import { ImageRounded } from "../ui/Image";
import DataNotification from "../../dummy.json"
import { Link } from "react-router-dom";
import { ButtonIcon } from "../ui/Button";
import { imageCheck } from "../../libs/utils";
import useDummy from "../../hooks/useDummy";

const Notification = () => {
  const [users, setUsers] = useState([]);
  const [imageStatus, setImageStatus] = useState({});

  const [useOpen, setOpen] = useState(false);
  const toggleNotification = () => {
    setOpen(!useOpen);
  };

  const { data, loading, error } = useDummy("notifications");

  useEffect(() => {
    if (data) {
      setUsers(data);
      const imageChecks = async () => {
        const status = {};
        await Promise.all(
          data.map(async (user) => {
            const result = await imageCheck(`${user.avatar}`);
            status[user.id] = result;
          })
        );
        setImageStatus(status);
      };

      imageChecks();
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const columns = data && data.length > 0 ? data : <p>Data Not Found..</p>;
  return (
    <>
      <ButtonIcon
        onClick={toggleNotification}
        type={'button'}
        color={'gray'}
        aria-expanded={useOpen ? "true" : "false"}
      >
        <span className="sr-only">View notifications</span>
        {/* <!-- Bell icon --> */}
        <IoIosNotifications className="w-6 h-6" fill="currentColor" />
      </ButtonIcon>

      {/* <!-- Dropdown menu --> */}
      <div
        className={`z-20 z-50 ${
          useOpen ? "block" : "hidden"
        } max-w-sm my-10 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700 ${
          useOpen ? "block" : ""
        } fixed top-5 right-5`}
        id="notification-dropdown"
        data-popper-placement="bottom"
      >
        <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          Notifications
        </div>
        <div>
        {DataNotification.notifications.map((item, index) => (
          <ListNotification key={item.id} type={item.type} timeStamp={item.timeStamp} data={item.data} imageStatus={imageStatus} />
        ))}
        </div>
        <a
          href="#"
          className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
        >
          <div className="inline-flex items-center ">
            <FaEye className="w-5 h-5 mr-2" fill="currentColor" />
            View all
          </div>
        </a>
      </div>
    </>
  );
};

export default Notification;

function ListNotification({ id, type, timeStamp, data, imageStatus }) {
  const getUserByEmail = (email) => {
    return DataNotification.users.find(user => user.email === email);
  };
  const user = getUserByEmail(data.email);
  const renderNotificationContent = ({imageStatus}) => {
    switch (type) {
      case 'inbox':
        return (
          <>
            <div className="flex-shrink-0">
              <ImageRounded
                          src={
                            imageStatus[user.id]
                              ? `${user.avatar}`
                              : "https://placehold.co/150x150?text=Image+Not+Found"
                          }
                          alt={user.name}
                          rounded="full"
                          w={10}
                          h={10}
                        />
              <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-blue-700 dark:border-gray-700">
                <BiMessageDetail className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                New message from{" "}
                <span className="font-semibold text-gray-900 dark:text-white">{user.name}</span>
                : "{data.message}"
              </div>
              <div className="text-xs font-medium text-blue-700 dark:text-blue-400">{timeStamp}</div>
            </div>
          </>
        );
      case 'follow':
        return (
          <>
            <div className="flex-shrink-0">
              <ImageRounded
                          src={
                            imageStatus[user.id]
                              ? `${user.avatar}`
                              : "https://placehold.co/150x150?text=Image+Not+Found"
                          }
                          alt={user.name}
                          rounded="full"
                          w={10}
                          h={10}
                        />
              <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700">
                <FaUserPlus className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">{user.name}</span>{" "}
                and{" "}
                <span className="font-medium text-gray-900 dark:text-white">{data.message}</span>{" "}
                started following you.
              </div>
              <div className="text-xs font-medium text-blue-700 dark:text-blue-400">{timeStamp}</div>
            </div>
          </>
        );
        case 'like':
          return (
            <>
                          <div className="flex-shrink-0">
              <ImageRounded
                          src={
                            imageStatus[user.id]
                              ? `${user.avatar}`
                              : "https://placehold.co/150x150?text=Image+Not+Found"
                          }
                          alt={user.name}
                          rounded="full"
                          w={10}
                          h={10}
                        />
              <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700">
                <FaHeart className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {user.name}
                </span>{" "}
                and{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {data.message}
                </span>{" "}
                love your story. See it and view more stories.
              </div>
              <div className="text-xs font-medium text-blue-700 dark:text-blue-400">
                {timeStamp}
              </div>
            </div>
            </>
          );
          case 'mention':
            return (
              <>
              <div className="flex-shrink-0">
              <ImageRounded
                          src={
                            imageStatus[user.id]
                              ? `${user.avatar}`
                              : "https://placehold.co/150x150?text=Image+Not+Found"
                          }
                          alt={user.name}
                          rounded="full"
                          w={10}
                          h={10}
                        />
              <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-700">
                <FaCommentDots className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="w-full pl-3">
              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Leslie Livingston
                </span>{" "}
                mentioned you in a comment:{" "}
                <span className="font-medium text-blue-700 dark:text-blue-500">
                  @bonnie.green
                </span>{" "}
                what do you say?
              </div>
              <div className="text-xs font-medium text-blue-700 dark:text-blue-400">
                1 hour ago
              </div>
            </div>
              </>
            );
            case 'activity':
              return (
                <>
                <div className="flex-shrink-0">
              <ImageRounded
                          src={
                            imageStatus[user.id]
                              ? `${user.avatar}`
                              : "https://placehold.co/150x150?text=Image+Not+Found"
                          }
                          alt={user.name}
                          rounded="full"
                          w={10}
                          h={10}
                        />
                  <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-700">
                    <FaCamera className="w-3 h-3 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="w-full pl-3">
                  <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </span>{" "}
                    posted a new video: {data.message}.
                  </div>
                  <div className="text-xs font-medium text-blue-700 dark:text-blue-400">
                    {timeStamp}
                  </div>
                </div>
                </>
              );
      default:
      return null;
    }
  };

  return (
    <Link to="#" className="flex px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600" key={id}>
      {renderNotificationContent({imageStatus})}
    </Link>
  );
}

