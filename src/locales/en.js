export default {
  languages: [{
    text: '中文',
    val: 'zh'
  }, {
    text: '英文',
    val: 'en'
  }],
  jimdb: {
    nav: {
      home: 'Home',
      docs: 'Docs',
      blogs: 'Blogs',
      community: 'Community',
      started: 'Get Started',
      download: 'DownLoad',
      mail: 'Mailing List'
    },
    home: {
      introduce: 'In Memory NoSQL Database',
      subIntroduce: 'JIMDB is a cloud native distributed database with intelligent storage tiering',
      getStarted: '快速开始',
      download: '本地下载',
      mailingList: '邮件列表',
      features: {
        title: 'The Key features of JIMDB',
        apis: 'Multiple APIs',
        apisP1: 'key-value interface: redis protocol compatible',
        apisP2: 'SQL interface: MySQL protocol',
        apisP3: 'RESTful',
        highly: 'Highly Scalable and Reliable',
        highlyP1: 'raft',
        highlyP2: 'sharding by table ranges, multi-raft replication, logical split, dynamic rebalancing',
        highlyP3: 'backup & recovery',
        storageTiers: 'Smart Scheduling of Storage Tiers',
        storageTiersP1: 'according to the access temperature, intelligent transition of hot/warm/cold ranges among RAM, SSD and disks',
        transactions: 'Transactions',
        transactionsP1: 'read committed, currently implemented',
        transactionsP2: 'txn record, intent, version, 2PC',
        cloud: 'Cloud Native',
        cloudP1: 'Orchestrated by Kubernetes',
        manage: 'Esay to Use',
        manageP1: 'change data capture',
        manageP2: 'online schema change',
        manageP3: 'management system, alarm system, rich monitoring report',
        architectTitle: 'System Architecture'
      },
      produciton: {
        title: 'JIMDB 生态'
      },
      deployment: {
        title: 'JIMDB 部署方式'
      },
      cloud: {
        title: {
          before: 'JIMDB 是',
          after: '的 Sandbox 项目'
        }
      },
      sigmod: 'JIMDB'
    },
    blog: {
      title: 'JIMDB 博客',
      read: '阅读',
      more: '更多'
    },
    community: {
      title: 'JIMDB',
      content: {
        introduce: 'JIMDB是一个开源项目，我们欢迎更多的开发人员加入我们。以下是我们用来交流和贡献的一些渠道：',
        mailingList: {
          title: '邮箱：',
          after: '讨论JIMDB的使用、社区支持及开发人员讨论。'
        },
        issueTracker: {
          before: '使用',
          middle: '来提交bug和特性请求。如果您需要帮助，请将您的问题发送到邮箱',
          after: '而不是提交一个GitHub Issue。'
        },
        contributing: {
          title: '贡献',
          before: '我们欢迎社区贡献！如果您计划进行更详细或有争议的更改，请在提交Pull Request之前和我们在邮件中或',
          after: '上进行讨论。'
        },
        projectGovernance: {
          title: '项目管理',
          before: 'ChubaoFS是一个独立的开源项目，不属于任何一家公司。更多细节请参阅'
        },
        code: {
          title: '行为准则',
          before: '为了使ChubaoFS成为受所有人欢迎且无困扰的体验，我们遵循',
          link: 'CNCF的行为准则',
          symbol: '。'
        }
      }
    }
  }
}
