export const getUserLinkIds = () => {
  const userLinkIds = localStorage.getItem('userLink')
    ? JSON.parse(localStorage.getItem('userLink'))
    : [];

  return userLinkIds;
};

export const saveUserLinkIds = (userLinks) => {
  if (userLinks.length) {
    localStorage.setItem('userLink', JSON.stringify(userLink));
  } else {
    localStorage.removeItem('userLink');
  }
};

// export const removeuserLinkId = (userLinks) => {
//   const userLinkIds = localStorage.getItem('userLink')
//     ? JSON.parse(localStorage.getItem('userLink'))
//     : null;

//   if (!userLinkIds) {
//     return false;
//   }

//   const updateduserLinkIds = userLinkIds?.filter(((savedBookId)) => savedBookId !== bookId);
//   localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

//   return true;
// };
