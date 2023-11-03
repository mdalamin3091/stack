/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import toast from "react-hot-toast";

type ApiResponse<Data, Error> = {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  data: Data | undefined | null;
  error: Error | any;
};

const useToastAndApiHandler = <Data, Error>(
  response: ApiResponse<Data, Error>,
  successMessage: string
) => {
  useEffect(() => {
    if (response.isSuccess && response.data) {
      toast.success(successMessage);
    } else if (response.isError && response.error) {
      toast.error(response.error?.data?.error);
    }
  }, [
    response.isSuccess,
    response.isError,
    response.data,
    response.error,
    successMessage,
  ]);
};

export default useToastAndApiHandler;
