import { v4 as createUuid } from "uuid";
import { Reply } from "./reply";
import { TweetBase } from "./tweetBase";
import { Like } from "./like";
import { Follow } from "./follow";
import { Retweet } from "./retweet";

export class User {
  private _id: string;
  private _enable: boolean;
  public tweet: TweetBase[];
  public retweet: Retweet[];
  public replie: Reply[];
  public likes: Like[];
  public followers: Follow[]; // Lista de IDs dos seguidores do usuário
  public following: Follow[];
  constructor(
    private _name: string,
    private _email: string,
    private _username: string,
    private _password: string
  ) {
    this._id = createUuid();
    this._enable = true;
    this.tweet = [];
    this.retweet = [];
    this.replie = [];
    this.likes = [];
    this.followers = [];
    this.following = [];
  }
  public get id() {
    return this._id;
  }

  public get enable() {
    return this._enable;
  }

  public get name() {
    return this._name;
  }

  public get email() {
    return this._email;
  }
  public get username() {
    return this._username;
  }
  public get password() {
    return this._password;
  }
  public toJson() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      username: this._username,
    };
  }

  public toSave() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      username: this._username,
      password: this._password,
    };
  }
}
