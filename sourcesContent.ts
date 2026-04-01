#!/usr/bin/env node
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.89

// Want to see the unminified source? We're hiring!
// https://job-boards.greenhouse.io/anthropic/jobs/4816199008
function greet(name: string) {          // 第1行
                                        // 第2行（空行）
    if (!name) {                        // 第3行（4空格缩进）
        return "Hello stranger";        // 第4行（8空格缩进）
    }                                   // 第5行（4空格缩进）
                                        // 第6行（空行）
    return `Hello ${name}`;             // 第7行（4空格缩进）
}                                       // 第8行
                                        // 第9行（空行）
// 文件结束                              // 第10行

console.log(greet('Claude Code.'))