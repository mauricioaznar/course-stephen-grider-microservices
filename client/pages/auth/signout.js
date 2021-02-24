import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import useRequest from '../../hooks/use-request'
import Router from "next/router";

function Signout(props) {

  const {doRequest} = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/')
  })

  useEffect(() => {
    doRequest()
  }, [])

  return (
    <div>Signing you out...</div>
  );
}

export default Signout;