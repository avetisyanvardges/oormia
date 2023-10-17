import endpoint from 'utils/endpoint';

export const addGroupEndpoint = endpoint('post', 'group');
export const deleteGroupEndpoint = id => endpoint('delete', `group/${id}`);
export const removeUserFromGroupEndpoint = ({userId, groupId}) =>
  endpoint('delete', `group/${groupId}/userId/${userId}`);
export const addUserInGroupEndpoint = ({userId, groupId}) =>
  endpoint('delete', `group/groupId/${groupId}/userId/${userId}`);
