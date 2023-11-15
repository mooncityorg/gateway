/*
Copyright 2021-present Boba Network.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

export const setTheme = (theme) => (dispatch) =>
  dispatch({ type: 'UI/THEME/UPDATE', payload: theme })

export const openModal =
  (
    modal?,
    token?,
    fast?,
    tokenIndex?,
    lock?,
    proposalId?,
    selectionLayer?,
    destNetworkSelection?
  ) =>
  (dispatch) =>
    dispatch({
      type: 'UI/MODAL/OPEN',
      payload: modal,
      token,
      fast,
      tokenIndex,
      lock,
      proposalId,
      selectionLayer,
      destNetworkSelection,
    })

export const closeModal = (modal) => (dispatch) =>
  dispatch({ type: 'UI/MODAL/CLOSE', payload: modal })

export const openAlert = (message) => (dispatch) =>
  dispatch({ type: 'UI/ALERT/UPDATE', payload: message })

export const closeAlert = () => (dispatch) =>
  dispatch({ type: 'UI/ALERT/UPDATE', payload: null })

export const openError = (message) => (dispatch) =>
  dispatch({ type: 'UI/ERROR/UPDATE', payload: message })

export const closeError = () => (dispatch) =>
  dispatch({ type: 'UI/ERROR/UPDATE', payload: null })
