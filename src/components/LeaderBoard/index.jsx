import { useEffect, useState } from "react"
import { Table } from "antd"
export const LeaderBoard = () => {
  const [games, setGames] = useState([])
  useEffect(() => {
    const pastGames = JSON.parse(localStorage.getItem("pastGames")) ?? []
    setGames(pastGames.map((game) => ({ ...game, key: Math.random() })))
  }, [])

  const columns = [
    {
      title: "Difficulty",
      dataIndex: "difficulty",
      key: "difficulty"
    },
    {
      title: "Turns",
      dataIndex: "turns",
      key: "turns"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    }
  ]
  return (
    <div>
      <div>
        {games?.length ? (
          <Table dataSource={games} columns={columns} />
        ) : (
          <div>No games saved yet.</div>
        )}
      </div>
    </div>
  )
}
