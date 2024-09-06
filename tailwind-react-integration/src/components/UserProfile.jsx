const UserProfile = () => {
  return (
    <div className="hover:shadow-xl bg-gray-100 sm:p-4 md:p-8 md:max-w-sm max-w-xs mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="hover:scale-110 transition-transform duration-300 ease-in-out rounded-full md:w-36 sm:w-24 md:h-36 sm:h-24 mx-auto"/>
      <h1 className="hover:text-blue-500 text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 md:text-base text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;