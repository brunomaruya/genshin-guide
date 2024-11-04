import { Hourglass } from "react-loader-spinner";

export const renderLoadingOrError = (loading, error) => {
  if (loading)
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  if (error) return error;
  return null;
};
