import Image from "../../elements/image/Image";

const Dashboard = () => {
  return (
    <>
      <div>
        <div>
          <Image
            classname="h-32 w-full object-cover lg:h-48"
            src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </div>
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div class="flex">
              <Image
                classname="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
