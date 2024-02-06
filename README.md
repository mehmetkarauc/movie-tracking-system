## Project Description:

The Movie Tracking System is a web application designed to help users track and discover movies. It features a search functionality that allows users to search for specific movies and filter them based on various genres.

## Design Decisions:

User Interface Design: The project prioritises a user-friendly design while also focusing on aesthetics to create an enjoyable browsing experience. Careful consideration was given to colour schemes, and layout to ensure readability and visual appeal.

Architecture: The project is organised in a component structure with components collectively creating a page design. There also is a page folder to store all the pages within the project and within each page, the components are called to create the page. While React's philosophy encourages reusable components, the decision was made to prioritise simplicity and clarity in component design for this project.

Responsive Design: Bootstrap was utilised to create a responsive layout that adapts seamlessly to different screen sizes and devices. Efforts were made to ensure that the application remains functional and visually appealing across various screen sizes.

## Technology Used:

Frontend Frameworks & Libraries: I utilised ReactJS as a frontend library.

Styling Tools: SCSS was used for styling to take advantage of its features such as variables, and nested rules, enhancing maintainability and organisation in the styling code. Bootstrap was also employed for its extensive collection of CSS components and utilities, speeding up the development process and ensuring a consistent design language.

## Challenges Faced:

Image URL Error: A challenge I encountered was that some of the movie poster URL's returned a '404 Not Found' error. I have tried to catch the error and ensure it doesn't error on the console by replacing it with an image placeholder however the error code still exists.

Responsive Design: A significant challenge was encountered while ensuring consistent image sizing across different screen sizes, particularly with placeholder images for missing posters. Adjusting the sizes of the images to match and maintain responsiveness posed difficulties, especially for the 'Image Not Found' poster. Ultimately, the decision was made to retain the original size.

Movie Modal Component: Implementing the modal overlay to display additional information about each movie presented its own set of challenges. Achieving the desired behaviour of the modal as an overlay, along with implementing the close functionality triggered by clicking the 'X' button, required careful consideration and testing.
