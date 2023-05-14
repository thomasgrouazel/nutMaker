import PocketBase from "pocketbase";

const pb = new PocketBase("https://louisrvl.fr/pocketbase");
pb.autoCancellation(false);

export default pb;
