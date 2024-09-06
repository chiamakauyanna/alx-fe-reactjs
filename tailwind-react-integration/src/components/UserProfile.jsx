const UserProfile = () => {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 md:max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full md:w-36 w-24 md:h-36 h-24 mx-auto"/>
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 md:text-base text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;