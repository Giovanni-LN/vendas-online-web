import { useDispatch } from 'react-redux';

import { setNotificationAction, setUserAction } from '.';
import type { UserType } from '../../../modules/login/types/UserType';
import type { NotificationEnum } from '../../../shared/types/NotificationType';
import { useAppSelector } from '../../hooks';

export const useGlobalReducer = () => {
  const dispatch = useDispatch();
  const { user, notification } = useAppSelector((state) => state.globalReducer);

  const setNotification = (message: string, type: NotificationEnum, description?: string) => {
    dispatch(
      setNotificationAction({
        message,
        type,
        description,
      }),
    );
  };
  const setUser = (user: UserType) => {
    dispatch(setUserAction(user));
  };

  return {
    user,
    notification,
    setNotification,
    setUser,
  };
};
