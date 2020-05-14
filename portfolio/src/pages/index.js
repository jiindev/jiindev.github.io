import React from "react"
import { Link } from "gatsby"

export default function Home() {
    return (
        <div style={{ color: `purple` }}>
            <Link to="/about">test</Link>
          <h1>test</h1>
          <p>What a world.</p>
        </div>
      );
  }