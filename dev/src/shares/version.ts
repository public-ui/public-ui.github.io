import VERSIONS from "../../versions.json"

export type Version = typeof VERSIONS[number] & "current";