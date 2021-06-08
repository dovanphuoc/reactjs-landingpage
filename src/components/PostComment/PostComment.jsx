import React from 'react';
import styles from './PostComment.module.scss'
import Button from '../common/Button/Button'

function PostComment() {
    return (
        <div className={styles.post}>
            <form className={styles.formValidate}>
                <div className={styles.commentWrapper}>
                    <textarea
                        placeholder="Leave a comment, be nice."
                        name="message"
                        maxLength="250"
                        autoComplete="off"
                    ></textarea>
                    <Button
                        type="primary"
                        children="Post It!"
                        floatRight
                        marginTop
                    />
                </div>
            </form>
        </div>
    );
}

export default PostComment;