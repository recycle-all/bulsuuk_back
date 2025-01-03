const router = require('express').Router();

const {
  waterTree,
  sunlightTree,
  fertilizerTree,
  levelUpToSprout,
  levelUpToBranch,
  levelUpToTree,
  levelUpToFlower,
  treeState,
} = require('../../controllers/user/treeController');

// 나무 상태 조회 라우트
router.post('/tree/state', treeState);

// 물주기 라우트
router.post('/tree/water', waterTree);

// 햇빛쐬기 라우트
router.post('/tree/sunlight', sunlightTree);

// 비료주기 라우트
router.post('/tree/fertilizer', fertilizerTree);

// 씨앗 > 새싹 라우트
router.post('/tree/level_sprout', levelUpToSprout);

// 새싹 > 가지 라우트
router.post('/tree/level_branch', levelUpToBranch);

// 가지 > 나무 라우트
router.post('/tree/level_tree', levelUpToTree);

// 나무 > 꽃 라우트
router.post('/tree/level_flower', levelUpToFlower);

module.exports = router;
