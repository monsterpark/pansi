package library

import (
	"goyave.dev/goyave/v5"
	v "goyave.dev/goyave/v5/validation"
)

func CreateRequest(_ *goyave.Request) v.RuleSet {
	return v.RuleSet{
		{Path: v.CurrentElement, Rules: v.List{v.Object(), v.Required()}},
		{Path: "path", Rules: v.List{v.Required(), v.String()}},
	}
}

func UpdateRequest(request *goyave.Request) v.RuleSet {
	return v.RuleSet{
		{Path: v.CurrentElement, Rules: CreateRequest(request)},
		{Path: "id", Rules: v.List{v.Required(), v.Int64(), v.Min(1)}},
	}
}

func DeleteRequest(_ *goyave.Request) v.RuleSet {
	return v.RuleSet{
		{Path: v.CurrentElement, Rules: v.List{v.Object(), v.Required()}},
		{Path: "ids", Rules: v.List{v.Required(), v.Array(), v.Min(1)}},
		{Path: "ids[]", Rules: v.List{v.Int64()}},
	}
}
