import { useParams } from "react-router-dom";

export default function BoardDetail() {
  const params = useParams();
  console.log(params);
  //   params ={boardID : '2'}
  const { boardID } = useParams();
  return (
    <>
      <h2>{boardID}번 게시물입니다.</h2>
      <h2>{params.boardID}번 게시물 입니다.</h2>
    </>
  );
}
