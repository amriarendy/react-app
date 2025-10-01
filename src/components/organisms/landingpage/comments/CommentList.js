import Image from "../../../elements/image/Image";

const CommentList = () => {
  return (
    <>
      <h2 className="sr-only">Customer Reviews</h2>
      {/* first comment */}
      <div className="-my-10">
        <div className="flex space-x-4 text-sm text-gray-500">
          <div className="flex-none py-10">
            <Image
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
              classname="h-10 w-10 rounded-full bg-gray-100"/>
          </div>
          <div className="flex-1 py-10">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Emily Selman
            </h3>
            <p>
              <time datetime="2021-07-16 dark:text-white">July 16, 2021</time>
            </p>

            <div className="prose prose-sm mt-4 max-w-none text-gray-500 dark:text-white">
              <p>
                This icon pack is just what I need for my latest project.
                There's an icon for just about anything I could ever need. Love
                the playful look!
              </p>
            </div>
          </div>
        </div>
        {/* second comment */}
        <div className="flex space-x-4 text-sm text-gray-500">
          <div className="flex-none py-10">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
              classname="h-10 w-10 rounded-full bg-gray-100"/>
          </div>
          <div className="flex-1 border-t border-gray-200 py-10">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Hector Gibbons
            </h3>
            <p>
              <time datetime="2021-07-12 dark:text-white">July 12, 2021</time>
            </p>

            <div className="prose prose-sm mt-4 max-w-none text-gray-500 dark:text-white">
              <p>
                Blown away by how polished this icon pack is. Everything looks
                so consistent and each SVG is optimized out of the box so I can
                use it directly with confidence. It would take me several hours
                to create a single icon this good, so it's a steal at this
                price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentList;
