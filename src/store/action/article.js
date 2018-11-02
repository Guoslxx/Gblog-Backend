
import { getAritcleList } from '../../api/article';
export const getArticleAction = () => {
    return dispatch => {
        return getAritcleList();
    }
}