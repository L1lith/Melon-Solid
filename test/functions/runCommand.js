import { spawn } from 'child_process'
//import { promisify } from 'util'
import kill from 'tree-kill'

function runCommand(command, dir = process.cwd()) {
  if (typeof command != 'string') throw new Error('Command is not a string')
  if (typeof dir != 'string') throw new Error('Directory is not a string')
  const child = spawn(command, [], { shell: true, cwd: dir })
  let dead = false
  child.on('exit', () => {
    dead = true
  })
  return () => {
    if (!dead) {
      kill(child.pid)
      dead = true
    }
  }
}

export default runCommand
