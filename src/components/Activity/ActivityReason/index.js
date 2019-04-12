import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Dict, Date, UserLink } from '../../../functional';
import getTypeByCode from '../../../services/get-type-by-code';
import styles from './slyle';

/**
 * @return {null}
 */
export default function ActivityReason({ reasonData, userGenerator }) {
    // Код причины - строковое значение ключа в единственном свойстве объекта latestReasonsData
    const reasonId = reasonData.code;
    if (!reasonId) {
        return null;
    }
    const reasonKey = getTypeByCode(reasonId);
    const date = reasonData.date || '';
    const hasSubscriptionGenerator = reasonData.subscriptionGenerator
        && reasonData.subscriptionGenerator.id;

    switch (reasonId) {
    case '1':
        return (
            <View style={styles.baseBlock}>
                <Text>
                    <Dict style={styles.text} code={reasonKey} spaceAfter />
                    <UserLink style={[styles.text, styles.link]} id={userGenerator.id} />
                </Text>
            </View>
        );
    case '5':
        // Цветная плашка
        return hasSubscriptionGenerator ? (
            <View style={styles.coloredBlock}>
                <Text>
                    <UserLink
                        style={[styles.coloredText, styles.coloredTextBold]}
                        id={reasonData.subscriptionGenerator.id}
                    />

                    <Dict style={styles.coloredText} code={reasonKey} spaceBefore spaceAfter />
                    <UserLink
                        style={[styles.coloredText, styles.coloredTextBold]}
                        id={userGenerator.id}
                    />
                </Text>
            </View>
        ) : null;
    case '11':
        return (
            <View style={styles.baseBlock}>
                <Text>
                    <UserLink style={[styles.text, styles.link]} id={userGenerator.id} />
                    <Date style={styles.text} spaceBefore spaceAfter>{date}</Date>
                    <Dict style={styles.text} code={reasonKey} />
                </Text>
            </View>
        );
    default:
        return (
            <View style={styles.baseBlock}>
                <Text>
                    <Dict style={styles.text} code={reasonKey} />
                    <Date style={styles.text} spaceBefore spaceAfter>{date}</Date>
                </Text>
            </View>
        );
    }
}

ActivityReason.propTypes = {
    reasonData: PropTypes.shape({
        code: PropTypes.string,
        subscriptionGenerator: PropTypes.shape({
            id: PropTypes.string
        }),
        date: PropTypes.string
    }).isRequired,
    userGenerator: PropTypes.shape({
        id: PropTypes.string
    }).isRequired
};
