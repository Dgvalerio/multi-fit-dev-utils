import { ILinks } from './_Links.interface';
import { IBase } from './Base.interface';
import { IHead } from './Head.interface';
import { IUser } from './User.interface';

export interface IPullRequest {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: IUser;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at: null;
  merged_at: null;
  merge_commit_sha: string;
  assignee: null;
  assignees: [];
  requested_reviewers: [];
  requested_teams: [];
  labels: [];
  milestone: null;
  draft: boolean;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: IHead;
  base: IBase;
  _links: ILinks;
  author_association: string;
  auto_merge: null;
  active_lock_reason: null;
}

export interface IPullRequestParams {
  state?: 'open' | 'closed' | 'all';
  sort?: 'created' | 'updated' | 'popularity' | 'long-running';
  direction?: 'asc' | 'desc';
}

export interface IPullRequestView {
  repo: string;
  user: {
    login: IPullRequest['user']['login'];
    avatar: IPullRequest['user']['avatar_url'];
  };
  created_at: IPullRequest['created_at'];
  state: IPullRequest['state'];
  title: IPullRequest['title'];
  body: IPullRequest['body'];
  url: IPullRequest['html_url'];
}
