export const isOnBoardingRequired = appData => {
  if (!appData) {
    return true;
  }

  return !appData.isProfileComplete;
};

export const isLoginRequired = appData => {
  if (!appData) {
    return true;
  }

  return appData.isAuthenticated;
};
