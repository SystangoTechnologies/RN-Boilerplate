/**
 * @ApiService is the single entry point for all api's calling, Here the Single fetch is written that will serve requests
 */

import { Alert } from 'react-native';
import Config from '../config';
import * as CONST from '../utils/constants';

export function CommonFetch(params, opt) {
  try {
    let URL = `${Config.API_URL}` + `${opt.url}`;
    const Options = {
      method: opt.method,
      URL,
      body: params
    };

    const ReqOptions = {
      method: Options.method,
      headers: {
      },
      body: params,
      timeout: CONST.API_TIMEOUT
    };

    ReqOptions.headers['Accept'] = 'application/json';
    ReqOptions.headers['Content-Type'] = 'application/json';

    if (ReqOptions.method === CONST.GET_API) {
      delete ReqOptions.body;
    } else {
      ReqOptions.body = JSON.stringify(Options.body);
    }

    const apiResponse = {};

    try {
      console.log('Options----', Options);
      console.log('ReqOptions----', ReqOptions);

      return new Promise((Resolve, Reject) => {
        requestTimeoutPromise(ReqOptions.timeout, fetch(Options.URL, ReqOptions), Resolve, Reject);
      }).then((Response) => {
        console.log('Api Response -----', Response);
        if (Response.status === 200 || Response.status === 201) {
          return Response.json();
        } else if (Response.status === 400) { //* Not found OR Something Went Wrong
          Response.json().then((res) => {
            Alert.alert('Url not found');
            return undefined;
          });
        } else if (Response.status === 401) { //* Not found OR Something Went Wrong
          try {
            Response.json().then((res) => {
              Alert.alert(res);
              return undefined;
            });
          } catch (error) {
            console.log('error-----', error);
          }
        } else {
          Alert.alert('SomeThing Went Wrong');
          return undefined;
        }
      })
        .catch((error) => {
          console.log('ApiService Error1 ####', error);
        });
    } catch (error) {
      console.log('ApiService Error2 ####', error);
      return undefined;
    }
  } catch (error) {
    console.log('ApiService Error3 ####', error);
    return undefined;
  }
}

/**
     * Request Timeout Promise
     */
function requestTimeoutPromise(waitingTime, promise, resoveInternal, rejectInternal) {
  const _timeout = setTimeout(() => {
    rejectInternal('TIMEOUT');
  }, waitingTime);
  try {
    promise.then(
      (res) => {
        clearTimeout(_timeout);
        resoveInternal(res);
      },
      (resError) => {
        console.log('Timeout Error1 ####', resError);
        clearTimeout(_timeout);
        rejectInternal('Request Timeout');
      }
    );
  } catch (error) {
    console.log('Timeout Error2 ####', error);
  }
}

// export default CommonFetch;
