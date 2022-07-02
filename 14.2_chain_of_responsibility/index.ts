import { AdultRule } from "./AdultRule";
import { ChildRule } from "./ChildRule";
import { SeniorRule } from "./SeniorRule";

const rule = new ChildRule();
rule.setNext(new AdultRule()).setNext(new SeniorRule());

rule.apply(70); // senior
rule.apply(32); // adult
rule.apply(14); // child
rule.apply(-1); // no rule applied
