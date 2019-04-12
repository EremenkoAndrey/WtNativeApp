export default function getTypeByCode(code) {
    switch (code) {
    case '1':
        return 'PUBLISHED_POST'; // Опубликован пост
    case '3':
        return 'FORECAST_RESULT_PUBLISHED'; // Опубликованы результаты прогноза
    case '5':
        return 'VOTE_POST'; // Пользователь рекомендует этот пост
    case '6':
        return 'COMMENT_POST'; // Пользователь прокомментировал этот пост
    case '11':
        return 'SHARING'; // Шаринг
    case '17':
        return 'FORECAST_EXPIRED'; // Прогноз истек
    case '23':
        return 'STRATEGY_SUBSCRIBE'; // Подписка на стратегию
    case '1001':
    case '1501':
        return 'POPULAR_POST'; // Популярный пост
    case '1002':
    case '1502':
        return 'RECENTLY_COMMENTED'; // Недавно прокомментировали
    case '1003':
    case '1503':
        return 'RECENTLY_LIKED'; // Недавно лайкнули
    case '1004':
    case '1504':
        return 'RECENTLY_DISLIKED'; // Недавно дизлайкнули
    case '1005':
    case '1505':
        return 'ACTIONABLE_POST'; // Самая популярная запись
    case '1006':
    case '1506':
        return 'RECOMMENDATION'; // Рекомендация или по другим данным это Топовый пост пользователя
    case '1007':
    case '1507':
        return 'NEW_AUTHOR_POST'; // Пост нового автора
    case '1008':
    case '1508':
        return 'COMMENT_THREAD'; // Запись с комментарием
    case '1009':
    case '1509':
        return 'RECENTLY_AGREED_FORECAST'; // Недавно согласились с прогнозом
    case '1010':
    case '1510':
        return 'RECENTLY_DISAGREED_FORECAST';// Недавно не согласились с прогнозом
    case '3000':
        return 'TOOL_FROM_WATCHLIST'; // Добавлена запись по инструменту списка из отслеживаемых
    case '4000':
        return 'SOCIAL_ACTIVE_CONTENT'; // Социально активный контент
    default:
        /* eslint no-undef:0 */
        if (__DEV__) {
            /* eslint no-console:0 */
            console.log(`getTypeByCode function: not found code ${code}`);
        }
        return '';
    }
}
