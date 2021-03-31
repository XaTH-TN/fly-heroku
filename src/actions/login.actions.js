import { message } from 'antd';

import { authorizedUrl } from '../constants/backendUrl';

import { loginConstants } from '../constants/login.constants';
import request from '../utils/request';
import { getPageQuery } from '../utils/utils';

//effects
export const loginFetch_Success = (user) => {
    return {
        type: loginConstants.LOGIN_SUCCESS,
        user
    }
}

export const logout_Success = (user) => {
  return {
      type: loginConstants.LOGOUT_REQUEST,
      user
  }
}

//actions
export const loginFetch = (params) => {
    debugger
    return (dispatch) => {
        return request(authorizedUrl, {
            method: 'POST',
            data: params
        }).then((data) => {
            if (data.status === 'ok') {
                dispatch(loginFetch_Success(data));
                const urlParams = new URL(window.location.href);
                const params = getPageQuery();
                message.success('🎉 🎉 🎉 Welcome to Fly Education！');
                let { redirect } = params;
        
                if (redirect) {
                  const redirectUrlParams = new URL(redirect);
        
                  if (redirectUrlParams.origin === urlParams.origin) {
                    redirect = redirect.substr(urlParams.origin.length);
        
                    if (window.routerBase !== '/') {
                      redirect = redirect.replace(window.routerBase, '/');
                    }
        
                    if (redirect.match(/^\/.*#/)) {
                      redirect = redirect.substr(redirect.indexOf('#') + 1);
                    }
                  } else {
                    window.location.href = '/';
                    return;
                  }
                }

                refreshPage();
                // const history = useHistory();

                // history.push('/');
              }
        })
    }
}

export const logoutRequest = () => {
  debugger
  return (dispatch) => {
    dispatch(logout_Success());
    refreshPage();
  };
} 

function refreshPage() {
    window.location.reload(false);
}