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
      home: '首页',
      docs: '文档',
      blogs: '博客',
      community: '社区',
      started: '快速开始',
      download: '下 载',
      mail: '邮 件'
    },
    home: {
      introduce: '以内存为中心的分布式数据库',
      subIntroduce: 'JIMDB是以内存为中心, 支持存储分层, 高性能, 低成本的分布式系统',
      getStarted: '快速开始',
      download: '本地下载',
      mailingList: '邮件列表',
      features: {
        title: 'JIMDB 主要功能特点',
        apis: '多协议支持',
        apisP1: 'KV: 支持Redis协议',
        apisP2: 'SQL: 支持MySQL协议',
        apisP3: 'RESTful',
        highly: '高可用, 强一致, 可扩展, 高可靠',
        highlyP1: 'raft复制协议',
        highlyP2: '自动分裂, 自动扩容, 自动均衡',
        highlyP3: '故障自动恢复',
        storageTiers: '智能分层存储',
        storageTiersP1: '智能调度: 依据访问频次以及QoS(Quality of Service), 智能调整数据属性为热/温/冷; 根据数据属性分别在RAM (masstree), SSD (rocksdb) and disks (rocksdb on CFS)中进行存储调度',
        transactions: '分布式事务',
        transactionsP1: 'read committed, currently implemented',
        transactionsP2: 'txn record, intent, version, 2PC',
        cloud: '云原生',
        cloudP1: 'Kubernetes编排',
        manage: '简洁易用',
        manageP1: '自动捕获数据变更',
        manageP2: '在线DDL',
        manageP3: '迁移工具, 管理系统, 报警系统, 丰富的监控报表支持',
        architectTitle: '系统架构'
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
          after: '的 JIMDB 项目'
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
      title: 'JIMDB社区',
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
          before: 'JIMDB是一个独立的开源项目，不属于任何一家公司。更多细节请参阅'
        },
        code: {
          title: '行为准则',
          before: '为了使JIMDB成为受所有人欢迎且无困扰的体验，我们遵循',
          link: 'CNCF的行为准则',
          symbol: '。'
        }
      }
    }
  }
}
