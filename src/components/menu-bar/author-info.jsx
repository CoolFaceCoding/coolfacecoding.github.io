import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import UserAvatar from './user-avatar.jsx';

import styles from './author-info.css';

const ActualAuthorInfo = ({
    className,
    imageUrl,
    projectTitle,
    // TODO: use userId to link to user's profile
    userId, // eslint-disable-line no-unused-vars
    username
}) => (
    <div
        className={classNames(
            className,
            styles.authorInfo
        )}
    >
        <UserAvatar
            className={styles.avatar}
            imageUrl={imageUrl}
            username={username}
        />
        <div className={styles.titleAuthor}>
            <h1 className={styles.projectTitle}>
                {projectTitle}
            </h1>
            <div>
                <span className={styles.usernameLine}>
                    <a style={{ color: "white" }} target="_blank" href={"https://www.snail-ide.com/profile?user=" + username}>
                        <FormattedMessage
                            defaultMessage="by {username}"
                            description="Shows that a project was created by this user"
                            id="gui.authorInfo.byUser"
                            values={{
                                username: <span className={styles.username}>{username}</span>
                            }}
                        />
                    </a>
                </span>
            </div>
        </div>
    </div>
);

ActualAuthorInfo.propTypes = {
    className: PropTypes.string,
    imageUrl: PropTypes.string,
    projectTitle: PropTypes.string,
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    username: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

const AuthorInfo = ({ projectId, ...props }) => (
    <ActualAuthorInfo {...props} />
);
AuthorInfo.propTypes = {
    projectId: PropTypes.string
};

export default AuthorInfo;
