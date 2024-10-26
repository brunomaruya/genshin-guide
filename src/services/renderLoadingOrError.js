export const renderLoadingOrError = (loading, error) => {
  if (loading) return "Loading...";
  if (error) return error;
  return null;
};
