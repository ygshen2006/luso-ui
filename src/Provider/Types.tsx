import { ReactElement, createContext } from "react"

export interface Issue {
    title: string,
    url: string,
    state: string
}

export interface Issue_Context{
    issues: Issue[],
    url: string
}

export const IssueContext = createContext<Issue_Context>({
    issues: [],
    url: ''
});

export interface Props {
    url: string,
    children: ReactElement
}
