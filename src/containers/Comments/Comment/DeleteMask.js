import React from 'react'

import { Button } from '@/components/Buttons'

import {
  DeleteOverlay,
  DeleteHintText,
  DeleteBtnGroup,
} from './styles/delete_mask'

import { cancelDelete, deleteComment } from '../logic'

const DeleteMask = ({ show }) => (
  <DeleteOverlay show={show}>
    <DeleteHintText>删除后该该评论将不可恢复</DeleteHintText>
    <DeleteBtnGroup>
      <Button size="small" type="red" ghost onClick={cancelDelete}>
        取消
      </Button>
      &nbsp;&nbsp;
      <Button size="small" type="red" onClick={deleteComment}>
        确定删除
      </Button>
    </DeleteBtnGroup>
  </DeleteOverlay>
)

export default React.memo(DeleteMask)
