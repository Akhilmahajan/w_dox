import styles from './MasterDetail.module.css'

import React, { ReactChild, useState } from 'react'

export interface IData {
  master: string
  detail: string
  icon: ReactChild
}

interface IProps {
  data: Array<IData>
}

export default function MasterDetail({ data }: IProps) {
  const [present, setPresent] = useState<IData>(data[0])

  return (
    <div className={styles.main}>
      <div className={styles.masters}>
        {data.map((datum, index) => (
          <div
            key={index}
            className={styles.masterWrapper}
            onClick={() => {
              setPresent(datum)
            }}
          >
            <div>{datum.icon}</div>
            <div
              className={`${styles.master} ${
                datum.master === present?.master ? styles.active : ''
              }`}
            >
              {datum.master}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.detail}>
        <p>{present?.detail}</p>
      </div>
    </div>
  )
}
