const users = [];

const addUsers = ({ socket_id, name, user_id, room_id }) => {
  const exists = users.find(
    (user) => user.room_id == room_id && user.user_id == user_id
  );
  if (exists) {
    return { error: 'User already exists in this room!' };
  }
  const user = { socket_id, name, user_id, room_id };
  users.push(user);
  return {
    user,
  };
};

module.exports = { addUsers };
