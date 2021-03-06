export interface InstagramUser {
    seo_category_infos: any[];
    logging_page_id: string;
    show_suggested_profiles: boolean;
    graphql: Graphql;
    toast_content_on_load: any | null;
    show_qr_modal: boolean;
    show_view_shop: boolean;
}
export interface Graphql {
    user: InstagramUser;
}
export interface InstagramUser {
    biography: string;
    blocked_by_viewer: boolean;
    restricted_by_viewer: boolean;
    country_block: boolean;
    external_url: string | null;
    external_url_linkshimmed: string | null;
    edge_followed_by: {
        count: number;
    };
    fbid: string;
    followed_by_viewer: boolean;
    edge_follow: {
        count: number;
    };
    follows_viewer: boolean;
    full_name: string;
    has_ar_effects: boolean;
    has_clips: boolean;
    has_guides: boolean;
    has_channel: boolean;
    has_blocked_viewer: boolean;
    highlight_reel_count: number;
    has_requested_viewer: boolean;
    hide_like_and_view_counts: boolean;
    id: string;
    is_business_account: boolean;
    is_professional_account: boolean;
    is_supervision_enabled: boolean;
    is_guardian_of_viewer: boolean;
    is_supervised_by_viewer: boolean;
    is_embeds_disabled: boolean;
    is_joined_recently: boolean;
    category_name: string;
    is_private: boolean;
    is_verified: boolean;
    edge_mutual_followed_by: {
        count: number;
        edges: any[];
    };
    profile_pic_url: string;
    profile_pic_url_hd: string;
    requested_by_viewer: boolean;
    username: string;
    pronouns: any[];
}
export interface Repo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: RepoOwner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: any;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: any;
    allow_forking: boolean;
    is_template: boolean;
    topics: any[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    temp_clone_token: any;
    network_count: number;
    subscribers_count: number;
}

export interface RepoOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: any;
    hireable: any;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface Posts {
    data: Post[];
    paging: {
        cursors: {
            before: string;
            after: string;
        }
    }
}

export interface Post {
    caption: string;
    id: string;
    media_type: string;
    media_url: string;
    permalink: string;
    timestamp: string;
    username: string;
    children?: {
        data: PostChildren[];
    };
}

export interface PostChildren {
    media_url: string;
    id: string;
}