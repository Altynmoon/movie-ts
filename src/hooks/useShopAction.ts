import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as shopActionCreator from "../store/actions/shopActionCreator";

export const useShopAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(shopActionCreator, dispatch);
  }, [dispatch]);
};
