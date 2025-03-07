import Button from "../Button/Button";

const AdminForm = () => {
  return (
    <div>
      <div className="mx-auto mt-5 w-full px-4 sm:px-6 md:px-8">
        <div className="w-full rounded-lg border border-gray-200 p-4 shadow-lg sm:p-6">
          <h2 className="mb-4 text-center text-xl font-semibold">
            Create Task
          </h2>
          <form className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium">Task Title</label>
                <input
                  type="text"
                  placeholder="Enter task title"
                  className="mt-1 w-full rounded-md border border-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  placeholder="Detailed description of task (Max 500 words)"
                  className="mt-1 h-48 w-full rounded-md border border-gray-200 p-2"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-md border border-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Assign To</label>
                <input
                  type="text"
                  placeholder="Enter assignee"
                  className="mt-1 w-full rounded-md border border-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Category</label>
                <input
                  type="text"
                  placeholder="Design, Development, etc..."
                  className="mt-1 w-full rounded-md border border-gray-200 p-2"
                />
              </div>
              <Button text="Create Task" className="mt-3" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
