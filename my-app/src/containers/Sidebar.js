/***
 *
 * サイドバーの定義
 *
 * ***/
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    TextField,
    ListItemIcon,
} from '@material-ui/core';
import {
    Person as PersonIcon,
    Public as PublicIcon,
} from '@material-ui/icons';

import { useHistory } from 'react-router';

const drawerWidth = 340;
const MAX_POST_CONTENT_LENGTH = 140;// 文字数

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: 'relative',
    },
    drawerPaper: {
        width: drawerWidth,
        position: 'relative',
    },
    toolbar: theme.mixins.toolbar,
    textField: {
        width: drawerWidth,
    },
    list: {
        width: 300,
    },
}));

export default function Sidebar({ activeListItem }) {
    const classes = useStyles();
    const history = useHistory();

    const [value, setValue] = useState('');// ポストの入力された内容のステート
    const [isError, setIsError] = useState(false);
    const [helperText, setHelperText] = useState('');

    // // 文字数チェックしてゴニョゴニョする関数
    // const handleChange = event => {
    //     setValue(event.target.value);
    //     if (event.target.value.length > MAX_POST_CONTENT_LENGTH) {
    //         setIsError(true);
    //         setHelperText(MAX_POST_CONTENT_LENGTH - event.target.value.length);
    //     }
    //     else {
    //         setIsError(false);
    //         setHelperText('');
    //     }
    // };
    //
    // /**
    //  *
    //  * 非同期でPostする関数
    //  * graphQL API のMutationを実行
    //  *
    //  * かっこいい処理
    //  *
    //  * **/
    // const onPost = async () => {
    //     const res = await API.graphql(graphqlOperation(createPost, {
    //         input: {
    //             type: 'post',
    //             content: value,
    //             timestamp: Math.floor(Date.now() / 1000), // 今の時間
    //         }
    //     }));
    //
    //     console.log(res);
    //     setValue('');
    // }
    //
    // // サインアウトさす関数
    // const signOut = () => {
    //     Auth.signOut()
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    // }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <List>
  
            </List>
        </Drawer>
    )
}
