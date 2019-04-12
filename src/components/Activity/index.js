import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'native-base';
import PreviewPost from '../PreviewPost';
import Comment from '../Comment';
import ActivityReason from './ActivityReason';
import { Text } from '../../functional';

function Activity({ activity }) {
    const renderContent = (id, type) => {
        switch (type) {
        case 'post':
            return <PreviewPost id={id} />;
        case 'comment':
            return <Comment id={id} />;
        default:
            return (
                <View
                    style={{
                        paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10
                    }}
                >
                    <Text>{`Неизвестный тип контента: ${type}`}</Text>
                </View>
            );
        }
    };

    return (
        <Card>
            {activity.data.reason ? (
                <ActivityReason
                    reasonData={activity.data.reason.latestReasonsData}
                    userGenerator={activity.generator}
                />
            ) : null}

            {renderContent(activity.obj.id, activity.obj.type)}

            <Text style={{ textAlign: 'center' }}>{`Activity id: ${activity.id}`}</Text>
        </Card>
    );
}

Activity.propTypes = {
    activity: PropTypes.shape({
        generator: PropTypes.shape({
            id: PropTypes.string
        }),
        obj: PropTypes.shape({
            id: PropTypes.string
        }).isRequired,
        data: PropTypes.shape({
            reason: PropTypes.shape({
                latestReasonsData: PropTypes.shape({
                    code: PropTypes.string
                }).isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    activity: state.activity[ownProps.id]
});

export default connect(mapStateToProps)(Activity);
