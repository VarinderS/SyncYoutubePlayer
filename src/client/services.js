import io from "socket.io-client";
import { ObservableSocket } from "shared/observable-socket";
import { UsersStore } from "./stores/users";
import { ChatStore } from "./stores/chat";
import { PlaylistStore } from "./stores/playlist";

export const socket = io({ autoConnect: false });

// create socket wrapper
export const server = new ObservableSocket(socket);

// create playlist store
export const playlistStore = new PlaylistStore(server);
// create user store
export const usersStore = new UsersStore(server);
// create chat store
export const chatStore = new ChatStore(server, usersStore);