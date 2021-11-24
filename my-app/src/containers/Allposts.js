/**
 *
 * 全てのユーザーのPostをtimestampの降順でリストアップ
 *
 * **/
import React, { useState, useEffect, useReducer } from 'react';
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
            return [...state, action.posts]
        case SUBSCRIPTION:
            return [action.post, ...state]
        default:
            return state;
    }
};

export default function AllPosts() {
    const [posts, dispatch] = useReducer(reducer, []);
    const [nextToken, setNextToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    /**
     *
     * 非同期で全ユーザのpostを時系列順にとってくる関数
     *
     * オサレな処理
     *
     * **/
    // const getPosts = async (type, nextToken = null) => {
    //     const res = await API.graphql(graphqlOperation(listPostsSortedByTimestamp, {
    //         type: "post",
    //         sortDirection: 'DESC',
    //         limit: 20, // 取得件数、default=10
    //         nextToken: nextToken,
    //     }));
    //
    //     console.log(res);
    //     dispatch({ type: type, posts: res.data.listPostsSortedByTimestamp.items })
    //     setNextToken(res.data.listPostsSortedByTimestamp.nextToken);
    //     setIsLoading(false);
    // }

    // 次から次へPostを引っ張る関数
    // const getAdditionalPosts = () => {
    //     if (nextToken === null) return; // 最後のページ
    //     getPosts(ADDITIONAL_QUERY, nextToken);
    // }

    // リアルタイムで新規Postを取得する関数
    // useEffect(() => {
    //     getPosts(INITIAL_QUERY);
    //
    //     const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
    //         next: (msg) => {
    //             console.log('allposts subscription fired')
    //             const post = msg.value.data.onCreatePost;
    //             dispatch({ type: SUBSCRIPTION, post: post })
    //         }
    //     });
    //     return () => subscription.unsubscribe();
    // }, []);

    return (
        <>
            <Sidebar
                activeListItem='global-timeline'
            />

        </>
    )
}
