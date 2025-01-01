import type { BulletinBoardItem, CreateBulletinBoardPayload, UpdateBulletinBoardPayload } from '@/entity/bulletinBoard.entity';
export declare const BulletinBoardRepository: {
    fetchBulletinBoards(): Promise<BulletinBoardItem[]>;
    fetchBulletinDetail(id: number): Promise<BulletinBoardItem>;
    createBulletin(payload: CreateBulletinBoardPayload): Promise<BulletinBoardItem>;
    updateBulletin(id: number, payload: UpdateBulletinBoardPayload): Promise<BulletinBoardItem>;
    deleteBulletin(id: number): Promise<void>;
    markAsRead(id: number): Promise<void>;
};
