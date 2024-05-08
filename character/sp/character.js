const characters = {
	sp_sunce: ["male", "qun", 4, ["olliantao"]],
	ol_liupi: ["male", "qun", 4, ["olyicheng"]],
	ol_lukai: ["male", "wu", 3, ["olxuanzhu", "oljiane"]],
	liupan: ["male", "qun", 4, ["olpijing"]],
	guotu: ["male", "qun", 3, ["olqushi", "olweijie"]],
	ol_hujinding: ["female", "shu", 3, ["olqingyuan", "olchongshen"]],
	tianchou: ["male", "qun", 4, ["olshandao"]],
	liyi: ["male", "wu", 4, ["olchanshuang", "olzhanjin"]],
	caoyu: ["male", "wei", 3, ["olgongjie", "olxiangxv", "olxiangzuo"]],
	ol_liwan: ["female", "wei", 3, ["ollianju", "olsilv"]],
	ol_dingshangwan: ["female", "wei", 3, ["olfudao", "olfengyan"]],
	zhangyan: ["male", "qun", 4, ["olsuji", "ollangdao"]],
	ol_tw_zhangji: ["male", "wei", 3, ["skill_zhangji_A", "skill_zhangji_B"], ["unseen"]],
	ol_feiyi: ["male", "shu", 3, ["yanru", "hezhong"]],
	lvboshe: ["male", "qun", 4, ["olfushi", "oldongdao"]],
	ol_luyusheng: ["female", "wu", 3, ["olcangxin", "olrunwei"]],
	caoxi: ["male", "wei", 3, ["olgangshu", "oljianxuan"]],
	ol_pengyang: ["male", "shu", 3, ["olxiaofan", "oltuishi", "nzry_cunmu"]],
	ol_qianzhao: ["male", "wei", 4, ["olweifu", "olkuansai"]],
	niujin: ["male", "wei", 4, ["olcuorui", "liewei"]],
	hejin: ["male", "qun", 4, ["mouzhu", "olyanhuo"]],
	hansui: ["male", "qun", 4, ["olniluan", "olxiaoxi"]],
	duanjiong: ["male", "qun", 4, ["olsaogu"]],
	ol_zhouqun: ["male", "shu", 4, ["oltianhou", "olchenshuo"]],
	ol_wenqin: ["male", "wei", 4, ["olguangao", "olhuiqi"]],
	haopu: ["male", "shu", 4, ["olzhenying"]],
	ol_mengda: ["male", "shu", 4, ["olgoude"]],
	ol_wanglang: ["male", "wei", 3, ["gushe", "oljici"]],
	ol_liuyan: ["male", "qun", "4/6", ["olpianan", "olyinji", "olkuisi"]],
	lushi: ["female", "qun", 3, ["olzhuyan", "releijie"]],
	zhangshiping: ["male", "shu", 3, ["olhongji", "olxinggu"]],
	sunhong: ["male", "wu", 3, ["olxianbi", "olzenrun"]],
	luoxian: ["male", "shu", 4, ["oldaili"]],
	ol_huban: ["male", "wei", 4, ["olhuiyun"]],
	wangguan: ["male", "wei", 3, ["olmiuyan", "olshilu"]],
	ol_zhangyì: ["male", "shu", 4, ["oldianjun", "olkangrui"]],
	ol_zhujun: ["male", "qun", 4, ["olcuipo"]],
	maxiumatie: ["male", "qun", 4, ["mashu", "rekenshang"]],
	dongtuna: ["male", "qun", 4, ["oljianman"]],
	zhanghua: ["male", "jin", 3, ["olbihun", "oljianhe", "olchuanwu"]],
	quhuang: ["male", "wu", 3, ["olqiejian", "olnishou"]],
	macheng: ["male", "shu", 4, ["mashu", "olchenglie"]],
	zhangzhi: ["male", "qun", 3, ["olbixin", "olximo"]],
	ol_liuba: ["male", "shu", 3, ["oltongduo", "olzhubi"]],
	ol_furong: ["male", "shu", 4, ["olxiaosi"]],
	ahuinan: ["male", "qun", 4, ["jueman"]],
	jin_guohuai: ["female", "jin", 3, ["zhefu", "yidu"]],
	xiahouxuan: ["male", "wei", 3, ["olhuanfu", "olqingyi", "olzeyue"]],
	dengzhong: ["male", "wei", 4, ["dzkanpo", "dzgengzhan"]],
	wangyan: ["male", "jin", 3, ["yangkuang", "cihuang", "sanku"]],
	huojun: ["male", "shu", 4, ["qiongshou", "fenrui"]],
	caoxiancaohua: ["female", "qun", 3, ["huamu", "qianmeng", "liangyuan", "jisi"]],
	jin_zhouchu: ["male", "jin", 4, ["shanduan", "yilie"]],
	zhaoyǎn: ["male", "wei", 4, ["tongxie"]],
	ol_puyuan: ["male", "shu", 4, ["olshengong", "olqisi"]],
	ruiji: ["female", "wu", 3, ["qiaoli", "qingliang"]],
	weizi: ["male", "qun", 3, ["yuanzi", "liejie"]],
	tengfanglan: ["female", "wu", 3, ["luochong", "aichen"]],
	sp_menghuo: ["male", "qun", 4, ["spmanwang"]],
	jin_yanghu: ["male", "jin", 4, ["huaiyuan", "chongxin", "dezhang"]],
	qinghegongzhu: ["female", "wei", 3, ["zengou", "qhzhangji"]],
	fanjiangzhangda: ["male", "wu", 4, ["yuanchou", "juesheng"]],
	tianyu: ["male", "wei", 4, ["saodi", "zhuitao"]],
	ol_chendeng: ["male", "qun", 4, ["olfengji"]],
	ol_zhuling: ["male", "wei", 4, ["jixian"]],
	wuyan: ["male", "wu", 4, ["lanjiang"]],
	sp_ol_zhanghe: ["male", "qun", 4, ["spolzhouxuan"]],
	ol_dongzhao: ["male", "wei", 3, ["olxianlve", "olzaowang"]],
	fengfangnv: ["female", "qun", 3, ["zhuangshu", "chuiti"]],
	ol_yangyi: ["male", "shu", 3, ["oljuanxia", "oldingcuo"]],
	zuofen: ["female", "jin", 3, ["zhaosong", "lisi"]],
	ol_wangrong: ["female", "qun", 3, ["olfengzi", "oljizhan", "olfusong"]],
	ol_dengzhi: ["male", "shu", 3, ["olxiuhao", "olsujian"]],
	ol_bianfuren: ["female", "wei", 3, ["fuwei", "yuejian"]],
	duxi: ["male", "wei", 3, ["quxi", "bixiong"]],
	gaogan: ["male", "qun", 4, ["juguan"]],
	huangchengyan: ["male", "qun", 3, ["guanxu", "yashi"]],
	huangzu: ["male", "qun", 4, ["wangong"]],
	panshu: ["female", "wu", 3, ["weiyi", "jinzhi"]],
	wolongfengchu: ["male", "shu", 4, ["youlong", "luanfeng"]],
	sp_zhangliao: ["male", "qun", 4, ["mubing", "ziqu", "diaoling"]],
	caoshuang: ["male", "wei", 4, ["retuogu", "shanzhuan"]],
	ol_zhangchangpu: ["female", "wei", 3, ["yanjiao", "olxingshen"]],
	zhangling: ["male", "qun", 3, ["zlhuji", "zlshoufu"]],
	caiyang: ["male", "qun", 1, ["yinka", "zhuixi"], ["forbidai", "unseen"]],
	sunshao: ["male", "wu", 3, ["bizheng", "yidian"]],

	huangfusong: ["male", "qun", 4, ["fenyue"]],
	yuantanyuanshang: ["male", "qun", 4, ["neifa"]],
	xujing: ["male", "shu", 3, ["yuxu", "xjshijian"]],

	jianggan: ["male", "wei", 3, ["weicheng", "daoshu"]],

	caoying: ["female", "wei", 4, ["xinfu_lingren", "fujian"], []],
	simahui: ["male", "qun", 3, ["jianjie", "xinfu_chenghao", "xinfu_yinshi"], []],
	baosanniang: ["female", "shu", 4, ["olwuniang", "olxushen"], []],

	yangxiu: ["male", "wei", 3, ["jilei", "danlao"]],
	chenlin: ["male", "wei", 3, ["bifa", "songci"]],
	caohong: ["male", "wei", 4, ["yuanhu"]],
	xiahouba: ["male", "shu", 4, ["baobian"]],
	yuanshu: ["male", "qun", 4, ["yongsi", "weidi"]],
	sp_diaochan: ["female", "qun", 3, ["lihun", "rebiyue"]],
	sp_zhaoyun: ["male", "qun", 3, ["ollongdan", "chongzhen"]],
	liuxie: ["male", "qun", 3, ["tianming", "mizhao", "twzhuiting"], ["zhu"]],
	zhugejin: ["male", "wu", 3, ["olhuanshi", "olhongyuan", "olmingzhe"]],
	zhugeke: ["male", "wu", 3, ["aocai", "duwu"]],
	guanyinping: ["female", "shu", 3, ["huxiao", "xueji", "wuji"]],
	simalang: ["male", "wei", 3, ["junbing", "quji"]],
	zhangxingcai: ["female", "shu", 3, ["shenxian", "qiangwu"]],
	fuwan: ["male", "qun", 4, ["dcmoukui"]],
	sp_sunshangxiang: ["female", "shu", 3, ["liangzhu", "fanxiang"]],
	caoang: ["male", "wei", 4, ["kaikang"]],
	sp_caoren: ["male", "wei", 4, ["weikui", "lizhan"]],
	zhangbao: ["male", "qun", 3, ["rezhoufu", "reyingbing"]],
	maliang: ["male", "shu", 3, ["zishu", "yingyuan"]],
	zhugedan: ["male", "wei", 4, ["gongao", "juyi"]],
	sp_jiangwei: ["male", "wei", 4, ["kunfen", "fengliang"]],
	sp_machao: ["male", "qun", 4, ["olzhuiji", "ol_shichou"]],
	sunhao: ["male", "wu", 5, ["recanshi", "rechouhai", "guiming"], ["zhu"]],
	shixie: ["male", "qun", 3, ["olbiluan", "relixia"]],
	mayunlu: ["female", "shu", 4, ["fengpo", "mashu"]],
	zhanglu: ["male", "qun", 3, ["yishe", "bushi", "midao", "twshijun"], ["zhu"]],
	wutugu: ["male", "qun", 15, ["ranshang", "hanyong"]],
	sp_caiwenji: ["female", "wei", 3, ["chenqing", "mozhi"]],
	zhugeguo: ["female", "shu", 3, ["qirang", "yuhua"]],

	lingju: ["female", "qun", 3, ["jieyuan", "fenxin"]],

	cuiyan: ["male", "wei", 3, ["yawang", "xunzhi"]],
	jsp_guanyu: ["male", "wei", 4, ["new_rewusheng", "danji"]],
	jsp_huangyueying: ["female", "qun", 3, ["jiqiao", "linglong"]],
	sunluyu: ["female", "wu", 3, ["new_meibu", "new_mumu"]],
	hanba: ["female", "qun", 4, ["fentian", "zhiri"]],
	zumao: ["male", "wu", 4, ["yinbing", "juedi"]],
	wenpin: ["male", "wei", 4, ["zhenwei"]],
	daxiaoqiao: ["female", "wu", 3, ["new_xingwu", "new_luoyan"]],

	guansuo: ["male", "shu", 4, ["zhengnan", "xiefang"]],
	tadun: ["male", "qun", 4, ["reluanzhan"]],
	yanbaihu: ["male", "qun", 4, ["zhidao", "jili"]],
	chengyu: ["male", "wei", 3, ["shefu", "benyu"]],

	sp_pangde: ["male", "wei", 4, ["mashu", "juesi"]],
	sp_jiaxu: ["male", "wei", 3, ["zhenlue", "jianshu", "yongdi"]],

	litong: ["male", "wei", 4, ["tuifeng"]],
	mizhu: ["male", "shu", 3, ["ziyuan", "jugu"]],
	buzhi: ["male", "wu", 3, ["hongde", "dingpan"]],

	caochun: ["male", "wei", 4, ["xinshanjia"]],

	dongbai: ["female", "qun", 3, ["lianzhu", "xiehui"]],

	zhaoxiang: ["female", "shu", 4, ["fanghun", "fuhan"]],
	mazhong: ["male", "shu", 4, ["fuman"]],
	dongyun: ["male", "shu", 3, ["bingzheng", "sheyan"]],
	kanze: ["male", "wu", 3, ["xiashu", "kuanshi"]],
	heqi: ["male", "wu", 4, ["olqizhou", "olshanxi"]],

	yuejin: ["male", "wei", 4, ["xiaoguo"]],
	sp_dongzhuo: ["male", "qun", 5, ["hengzheng"]],
	hetaihou: ["female", "qun", 3, ["zhendu", "qiluan"]],
	dingfeng: ["male", "wu", 4, ["reduanbing", "refenxun"]],
	shamoke: ["male", "shu", 4, ["gzjili"]],

	zhangren: ["male", "qun", 4, ["chuanxin", "zfengshi"]],

	wangyun: ["male", "qun", 4, ["xinlianji", "xinmoucheng"], ["clan:太原王氏"]],
	sunqian: ["male", "shu", 3, ["qianya", "shuimeng"]],
	xizhicai: ["male", "wei", 3, ["tiandu", "xianfu", "chouce"]],
	quyi: ["male", "qun", 4, ["fuqi", "jiaozi"]],

	luzhi: ["male", "wei", 3, ["qingzhong", "weijing"]],
};

export default characters;
