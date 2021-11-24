/**
 *
 * 特定ユーザのPost一覧を表示するUI
 *
 * **/
import React, { useState, useEffect, useReducer } from 'react';

import { useParams } from 'react-router';
import { Button } from '@material-ui/core';

import PostList from '../components/PostList';
import Sidebar from './Sidebar';

const SUBSCRIPTION = 'SUBSCRIPTION';
const INITIAL_QUERY = 'INITIAL_QUERY';
const ADDITIONAL_QUERY = 'ADDITIONAL_QUERY';

const reducer = (state, action) => {
    switch (action.type) {
        case INITIAL_QUERY:
            return action.posts;
        case ADDITIONAL_QUERY:
            return [...state, ...action.posts]
        case SUBSCRIPTION:
            return [action.post, ...state]
        default:
            return state;
    }
};

export default function PostsBySpecifiedUser() {
    const { userId } = useParams();

    const [posts, dispatch] = useReducer(reducer, []);
    const [nextToken, setNextToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);
    //
    // // Post一覧を表示する関数
    // const getPosts = async (type, nextToken = null) => {
    //     const res = await API.graphql(graphqlOperation(listPostsBySpecificOwner, {
    //         owner: userId,
    //         sortDirection: 'DESC',
    //         limit: 20, //default = 10
    //         nextToken: nextToken,
    //     }));
    //     console.log(res);
    //     dispatch({ type: type, posts: res.data.listPostsBySpecificOwner.items })
    //     setNextToken(res.data.listPostsBySpecificOwner.nextToken);
    //     setIsLoading(false);
    // }
    //
    // // フォロー中か否かをゲットする関数
    // const getIsFollowing = async ({ followerId, followeeId }) => {
    //     const res = await API.graphql(graphqlOperation(getFollowRelationship, {
    //         followeeId: followeeId,
    //         followerId: followerId,
    //     }));
    //     console.log(res)
    //     return res.data.getFollowRelationship !== null
    // }
    //
    // // 次から次へPostを引っ張る関数
    // const getAdditionalPosts = () => {
    //     if (nextToken === null) return; //Reached the last page
    //     getPosts(ADDITIONAL_QUERY, nextToken);
    // }
    //
    // // フォローする関数
    // const follow = async () => {
    //     console.log('follow')
    //     const input = {
    //         followeeId: userId,
    //         followerId: currentUser.username,
    //         timestamp: Math.floor(Date.now() / 1000),
    //     }
    //
    //     const res = await API.graphql(graphqlOperation(createFollowRelationship, { input: input }));
    //     if (!res.data.createFollowRelationship.erros) setIsFollowing(true);
    //     console.log(res);
    // }
    //
    // // フォロー解除する関数
    // const unfollow = async () => {
    //     console.log('unfollow');
    //     const input = {
    //         followeeId: userId,
    //         followerId: currentUser.username,
    //     }
    //
    //     const res = await API.graphql(graphqlOperation(deleteFollowRelationship, { input: input }));
    //     if (!res.data.deleteFollowRelationship.erros) setIsFollowing(false);
    //     console.log(res);
    // }
    //
    // useEffect(() => {
    //
    //     // ログイン中のユーザ情報を取得する関数
    //     const init = async () => {
    //         const currentUser = await Auth.currentAuthenticatedUser();
    //         setCurrentUser(currentUser);
    //
    //         setIsFollowing(await getIsFollowing({ followeeId: userId, followerId: currentUser.username }));
    //
    //         getPosts(INITIAL_QUERY);
    //     }
    //     init()
    //
    //     const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
    //         next: (msg) => {
    //             const post = msg.value.data.onCreatePost;
    //             if (post.owner !== userId) return;
    //             dispatch({ type: SUBSCRIPTION, post: post });
    //         }
    //     });
    //     return () => subscription.unsubscribe();
    // }, []);
    //

    // プロフィール項目
    return (
        <>
            <Sidebar
                activeListItem='profile'
            />

        </>
    )
}
