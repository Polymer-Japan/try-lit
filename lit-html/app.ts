import { html, render } from 'lit-html'
import { asyncReplace } from 'lit-html/directives/async-replace'

const myTemplate = html`
	${asyncReplace(async () => {
		const redit = await fetch('https://www.reddit.com/r/javascript.json')
	})}
`

render(myTemplate, document.body)
