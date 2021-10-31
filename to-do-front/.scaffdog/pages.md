---
name: 'pages'
root: 'src/components/page'
output: '*'
ignore: []
questions:
  value: 'Please enter component name.'
---

# `{{inputs.value | pascal}}/{{ inputs.value | pascal }}.tsx`

```typescript
import React from 'react';

export const {{inputs.value | pascal}}: React.FC = () => {
    return (
        <div>{{inputs.value | pascal}} page</div>
    );
}
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.module.css`

```css
.container {
    width: 100%;
    height: 100%;
}
```

# `{{ inputs.value | pascal }}/{{ inputs.value | pascal }}.page.tsx`

```typescript
import React from 'react';
import { {{ inputs.value | pascal }} } from './{{ inputs.value | pascal }}'

export const {{ inputs.value | pascal}}Page = () => {
    return (
        <{{ inputs.value | pascal }}></{{ inputs.value | pascal }}>
    );
}
```


