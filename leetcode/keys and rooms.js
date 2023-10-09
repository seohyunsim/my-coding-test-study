/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const keys = [0];
  const visited = Array(rooms.length).fill(false);

  const dfs = (i) => {
    visited[i] = true;

    rooms[i].forEach((el) => keys.push(el));

    for (const key of keys) {
      if (!visited[key]) dfs(key);
    }
  };

  dfs(keys[0]);

  return visited.every((el) => el === true);
};
