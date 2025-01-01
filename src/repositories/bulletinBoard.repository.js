// src/repositories/bulletinBoard.repository.ts
import axios from '@/axios'; // カスタム Axios インスタンスをインポート
import { BulletinBoardConstants } from '@/constants/bulletinBoard.constants';
// データマッピング関数
const mapToBulletinBoardItem = (data) => {
    return {
        id: data.id,
        title: data.title,
        content: data.content,
        userId: data.user_id, // スネークケースからキャメルケースに変換
        userName: data.user_name,
        userIconUrl: data.user_icon_url,
        files: Array.isArray(data.files)
            ? data.files.map((file) => ({
                id: file.id,
                fileName: file.fileName,
                fileUrl: file.fileUrl
            }))
            : [], // `files` が存在しない場合は空配列を返す
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        isRead: data.is_read ?? false
    };
};
export const BulletinBoardRepository = {
    // 全掲示板投稿を取得
    async fetchBulletinBoards() {
        const response = await axios.get(BulletinBoardConstants.BULLETIN_BOARDS);
        if (Array.isArray(response.data)) {
            return response.data.map(mapToBulletinBoardItem);
        }
        else if (response.data && Array.isArray(response.data.bulletin_boards)) {
            return response.data.bulletin_boards.map(mapToBulletinBoardItem);
        }
        else {
            throw new Error('Unexpected response format for fetchBulletinBoards');
        }
    },
    // 特定の掲示板投稿を取得
    async fetchBulletinDetail(id) {
        const response = await axios.get(`${BulletinBoardConstants.BULLETIN_BOARDS}/${id}`);
        return mapToBulletinBoardItem(response.data);
    },
    // 新規掲示板投稿を作成
    async createBulletin(payload) {
        try {
            const formData = new FormData();
            formData.append('bulletin_board[title]', payload.title);
            formData.append('bulletin_board[content]', payload.content);
            payload.files.forEach((file) => {
                formData.append('bulletin_board[files][]', file);
            });
            const response = await axios.post(BulletinBoardConstants.BULLETIN_BOARDS, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return mapToBulletinBoardItem(response.data);
        }
        catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                throw new Error(error.response.data.errors.join(', '));
            }
            else {
                throw new Error('投稿の作成に失敗しました。');
            }
        }
    },
    // 投稿を更新
    async updateBulletin(id, payload) {
        try {
            const response = await axios.put(`${BulletinBoardConstants.BULLETIN_BOARDS}/${id}`, {
                bulletin_board: payload
            });
            return mapToBulletinBoardItem(response.data);
        }
        catch (error) {
            console.error('Error in updateBulletin:', error);
            if (error.response && error.response.data && error.response.data.errors) {
                throw new Error(error.response.data.errors.join(', '));
            }
            else {
                throw new Error('投稿の更新に失敗しました。');
            }
        }
    },
    // 投稿を削除
    async deleteBulletin(id) {
        await axios.delete(`${BulletinBoardConstants.BULLETIN_BOARDS}/${id}`);
    },
    // 投稿内容を既読に設定
    async markAsRead(id) {
        await axios.patch(`/bulletin_boards/${id}/mark_as_read`);
    }
};
